# Generated by Django 3.1.5 on 2021-02-08 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Element', '0002_auto_20210208_1320'),
    ]

    operations = [
        migrations.AlterField(
            model_name='element',
            name='color',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]