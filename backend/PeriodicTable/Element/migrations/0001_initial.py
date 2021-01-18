# Generated by Django 3.1.5 on 2021-01-16 11:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Block',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name_plural': 'Block',
            },
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name_plural': 'Group',
            },
        ),
        migrations.CreateModel(
            name='Period',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name_plural': 'Period',
            },
        ),
        migrations.CreateModel(
            name='Element',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('AtomicNumber', models.IntegerField(blank=True, default=1)),
                ('Element', models.CharField(blank=True, default='', max_length=200)),
                ('Symbol', models.CharField(blank=True, default='', max_length=20)),
                ('AtomicMass', models.FloatField(blank=True, default=0.0)),
                ('NumberofNeutrons', models.IntegerField(blank=True, default=0)),
                ('NumberofProtons', models.IntegerField(blank=True, default=0)),
                ('NumberofElectrons', models.IntegerField(blank=True, default=0)),
                ('Phase', models.CharField(choices=[('solid', 'solid'), ('gas', 'gas'), ('liq', 'liq'), ('artificial', 'artificial')], max_length=30)),
                ('Radioactive', models.BooleanField(blank=True, default=False)),
                ('Natural', models.BooleanField(blank=True, default=False)),
                ('Metal', models.BooleanField(blank=True, default=False)),
                ('Nonmetal', models.BooleanField(blank=True, default=False)),
                ('Metalloid', models.BooleanField(blank=True, default=False)),
                ('Type', models.CharField(choices=[('Transition_Metal', 'Transition_Metal'), ('Actinide', 'Actinide'), ('Lanthanide', 'Lanthanide'), ('Transactinide', 'Transactinide'), ('Nonmetal', 'Nonmetal'), ('Metal', 'Metal'), ('Metalloid', 'Metalloid'), ('Noble_Gas', 'Noble_Gas'), ('Alkali_Metal', 'Alkali_Metal'), ('Alkaline_Earth_Metal', 'Alkaline_Earth_Metal'), ('Halogen', 'Halogen')], max_length=30)),
                ('AtomicRadius', models.FloatField(blank=True, default=0.0)),
                ('Electronegativity', models.FloatField(blank=True, default=0.0)),
                ('FirstIonization', models.FloatField(blank=True, default=0.0)),
                ('Density', models.FloatField(blank=True, default=0.0)),
                ('MeltingPoint', models.FloatField(blank=True, default=0.0)),
                ('BoilingPoint', models.FloatField(blank=True, default=0.0)),
                ('NumberOfIsotopes', models.IntegerField(blank=True, default=0)),
                ('Discoverer', models.CharField(blank=True, default='', max_length=200)),
                ('Year', models.IntegerField(blank=True, default=0)),
                ('SpecificHeat', models.FloatField(blank=True, default=0.0)),
                ('NumberofShells', models.IntegerField(blank=True, default=0)),
                ('NumberofValence', models.IntegerField(blank=True, default=0)),
                ('Block', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Element.block')),
                ('Group', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Element.group')),
                ('Period', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Element.period')),
            ],
        ),
    ]
