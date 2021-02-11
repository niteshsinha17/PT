from django.core.management.base import BaseCommand
import csv
from Course.models import Chapter
from game.models import Question, Option, Answer


class Command(BaseCommand):
    help = 'This command create Quizzes for all Chapters in database. '

    def handle(self, *args, **kwargs):
        self.create_question()
        self.stdout.write(self.style.SUCCESS("All Questions created"))
        self.create_quiz()
        self.stdout.write(self.style.SUCCESS("All Quizzes created"))

    def create_question(self, *args, **kwargs):
        with open("game/management/commands/question.csv", "r") as data_file:
            reader = csv.DictReader(data_file)
            for line in reader:
                chapter = Chapter.objects.get(name=line["chapter"])
                question, _ = Question.objects.get_or_create(
                    chapter=chapter, question=line["question"])

    def create_quiz(self, *args, **kwargs):
        with open("game/management/commands/quiz.csv", "r") as data_file:
            reader = csv.DictReader(data_file)
            for line in reader:
                chapter = Chapter.objects.get(name=line["chapter"])
                question = Question.objects.get(
                    question=line["question"], chapter=chapter)
                if line["option1"]:
                    option1 = Option.objects.create(
                        question=question, option=line["option1"])
                if line["option2"]:
                    option2 = Option.objects.create(
                        question=question, option=line["option2"])
                if line["option3"]:
                    option3 = Option.objects.create(
                        question=question, option=line["option3"])
                if line["option4"]:
                    option4 = Option.objects.create(
                        question=question, option=line["option4"])
                answer = Answer.objects.create(
                    question=question, answer=line["answer"], reason=line["reason"])
