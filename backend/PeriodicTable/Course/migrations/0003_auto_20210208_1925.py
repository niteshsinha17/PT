# Generated by Django 3.1.5 on 2021-02-08 13:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0002_auto_20210208_1915'),
    ]

    operations = [
        migrations.RenameField(
            model_name='topic',
            old_name='tname',
            new_name='name',
        ),
    ]