# Generated by Django 3.1.5 on 2021-01-17 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Element', '0002_auto_20210116_1703'),
    ]

    operations = [
        migrations.AlterField(
            model_name='element',
            name='Type',
            field=models.CharField(choices=[('Transition_Metal', 'Transition_Metal'), ('Actinide', 'Actinide'), ('Lanthanide', 'Lanthanide'), ('Transactinide', 'Transactinide'), ('Nonmetal', 'Nonmetal'), ('Metal', 'Metal'), ('Metalloid', 'Metalloid'), ('Noble_Gas', 'Noble_Gas'), ('Alkali_Metal', 'Alkali_Metal'), ('Alkaline_Earth_Metal', 'Alkaline_Earth_Metal'), ('Halogen', 'Halogen'), ('Not_defined', 'Not_defined')], max_length=30),
        ),
    ]
