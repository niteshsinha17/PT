# Generated by Django 3.1.7 on 2021-02-24 05:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20210222_1253'),
    ]

    operations = [
        migrations.AddField(
            model_name='chapterscore',
            name='profile_user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='account.profile'),
        ),
    ]
