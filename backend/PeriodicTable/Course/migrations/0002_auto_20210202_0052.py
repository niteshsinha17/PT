# Generated by Django 3.1.5 on 2021-02-01 19:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='topic',
            name='theory',
        ),
        migrations.CreateModel(
            name='TopicElement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='topic_elements', to='Course.topic')),
            ],
        ),
    ]