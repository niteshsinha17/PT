import csv
# from Course.models import Chapter
with open("game/management/commands/quiz.csv", "r") as data_file:
    reader = csv.DictReader(data_file)
    print(reader)
    i = 0
    for line in reader:
        i = i+1
        print(i)
        if line["chapter"]:
            print(
                f'\t{line["chapter"]} NUMBER-> {line["question"]}, read_time-> {line["option1"]}')
