# Generated by Django 3.1.5 on 2021-02-08 13:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chapter',
            old_name='chapter_name',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='topic',
            old_name='topic_name',
            new_name='tname',
        ),
    ]
