# Generated by Django 3.1.5 on 2021-01-16 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Element', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='block',
            name='Block_name',
            field=models.CharField(blank=True, choices=[('s', 's'), ('p', 'p'), ('d', 'd'), ('f', 'f')], max_length=30),
        ),
        migrations.AddField(
            model_name='group',
            name='Group_name',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='period',
            name='Period_name',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]