from django.core.management.base import BaseCommand
import csv
from Course.models import Chapter, Topic


class Command(BaseCommand):
    help = 'This command create all Chapters and Topics in database. '

    def handle(self, *args, **kwargs):
        self.create_chapter()
        self.stdout.write(self.style.SUCCESS("All Chapters created"))
        self.create_topic()
        self.stdout.write(self.style.SUCCESS("All Topics created"))

    def create_chapter(self, *args, **kwargs):
        with open("Course/management/commands/chapters.csv", "r") as data_file:
            reader = csv.DictReader(data_file)

            for line in reader:
                chapter, _ = Chapter.objects.get_or_create(
                    name=line["name"], number=line["number"], slug=line["slug"], read_time=line["read_time"])

    def create_topic(self, *args, **kwargs):
        with open("Course/management/commands/topics.csv", "r") as data_file:
            reader = csv.DictReader(data_file)

            for line in reader:
                chapter = Chapter.objects.get(name=line["chapter"])
                topic, _ = Topic.objects.get_or_create(
                    name=line["name"], number=line["number"], slug=line["slug"],
                    chapter=chapter, read_time=line["read_time"])
