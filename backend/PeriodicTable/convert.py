import csv
import json

with open("updated_periodic_table.csv", "r") as data_file:
    reader = csv.DictReader(data_file)
    s_block = []
    d_block = []
    p_block = []
    f_block = []

    for line in reader:
        b = line["block"]
        if b == "s":
            s_block.append(line)
        elif b == "p":
            p_block.append(line)
        elif b == "f":
            f_block.append(line)
        elif b == "d":
            d_block.append(line)

    with open("s_block.py", "w") as write_file:
        json.dump(s_block, write_file, indent=4)
    with open("p_block.py", "w") as write_file:
        json.dump(p_block, write_file, indent=4)
    with open("d_block.py", "w") as write_file:
        json.dump(d_block, write_file, indent=4)
    with open("f_block.py", "w") as write_file:
        json.dump(f_block, write_file, indent=4)
