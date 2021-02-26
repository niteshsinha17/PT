from django.db import models
from django.utils.translation import ugettext_lazy as _
import datetime
# Create your models here.


def year_choices():
    return [(r, r) for r in range(1920, datetime.date.today().year+1)]


class Period(models.Model):
    name = models.IntegerField(
        null=True, blank=True, unique=True)

    class Meta:
        verbose_name = "Period"

    def __str__(self):
        return 'Period {}'.format(str(self.name))


class Block(models.Model):
    BLOCK_CATEGORIES = (
        ('s', 's'),
        ('p', 'p'),
        ('d', 'd'),
        ('f', 'f')
    )

    name = models.CharField(
        max_length=30, null=True, blank=True, unique=True, choices=BLOCK_CATEGORIES)

    class Meta:
        verbose_name = "Block"

    def __str__(self):
        return '{} Block'.format(self.name)


class Group(models.Model):
    name = models.IntegerField(
        null=True, blank=True, unique=True)

    block = models.ForeignKey(
        Block, on_delete=models.CASCADE, blank=True, null=True, related_name='groups')

    class Meta:
        verbose_name = "Group"

    def __str__(self):
        return 'Group {}'.format(str(self.name))


class Mnemonics(models.Model):
    group = models.ForeignKey(
        Group, null=True, blank=True, on_delete=models.CASCADE, related_name='mnemonics')
    period = models.ForeignKey(
        Period, null=True, blank=True, on_delete=models.CASCADE, related_name='mnemonics')
    mnemonics_hindi = models.CharField(max_length=500, null=True, blank=True)
    mnemonics_english = models.CharField(max_length=500, null=True, blank=True)


class Element(models.Model):
    PHASE_CATEGORIES = (
        ('Solid', 'Solid'),
        ('Gas', 'Gas'),
        ('Liquid', 'Liquid'),
        ('Artificial', 'Artificial')
    )

    CATEGORIES = (
        ('Alkali Metal', 'Alkali Metal'),
        ('Alkaline Earth Metal', 'Alkaline Earth Metal'),
        ('Transition Metal', 'Transition Metal'),
        ('Actinide', 'Actinide'),
        ('Lanthanide', 'Lanthanide'),
        ('Post Transition Metal', 'Post Transition Metal'),
        ('Other Non Metal', 'Other Non Metal'),
        ('Metalloid', 'Metalloid'),
        ('Noble Gas', 'Noble Gas'),
        ('Halogen', 'Halogen'),
    )

    atomic_number = models.IntegerField(null=True, blank=True)
    name = models.CharField(max_length=200)
    symbol = models.CharField(null=True, blank=True, max_length=20)
    block = models.ForeignKey(
        Block, null=True, blank=True, on_delete=models.CASCADE, related_name='elements')
    atomic_mass = models.FloatField(null=True, blank=True)
    nn = models.IntegerField(_("No of Neutrons"), null=True, blank=True)
    np = models.IntegerField(_("No of Protons"), null=True, blank=True)
    ne = models.IntegerField(_("No of Electrons"), null=True, blank=True)
    period = models.ForeignKey(
        Period, null=True, blank=True, on_delete=models.CASCADE)
    group = models.ForeignKey(
        Group, null=True, blank=True, on_delete=models.CASCADE, related_name='elements')
    phase = models.CharField(max_length=30, choices=PHASE_CATEGORIES)
    radioactive = models.BooleanField(default=False)
    natural = models.BooleanField(default=False)
    metal = models.BooleanField(default=False)
    non_metal = models.BooleanField(default=False)
    metalloid = models.BooleanField(default=False)
    _type = models.CharField(
        max_length=30, choices=CATEGORIES, null=True, blank=True)
    color = models.CharField(max_length=30, null=True, blank=True)
    exception = models.BooleanField(null=True, blank=True)
    exception_type = models.CharField(max_length=50, null=True, blank=True)
    atomic_radius = models.FloatField(null=True, blank=True)
    electronegativity = models.FloatField(null=True, blank=True)
    first_ionization = models.FloatField(null=True, blank=True)
    density = models.FloatField(null=True, blank=True)
    melting_point = models.FloatField(null=True, blank=True)
    boiling_point = models.FloatField(null=True, blank=True)
    ns = models.IntegerField(_('Number of Isotopes'), default=0, blank=True)
    discovered_by = models.CharField(default='', blank=True, max_length=200)
    year = models.IntegerField(
        _('Year of Discovery'), null=True, blank=True)
    specific_heat = models.FloatField(null=True, blank=True)
    shells = models.IntegerField(_('Number of Shells'), null=True, blank=True)
    valence = models.IntegerField(null=True, blank=True)

    class Meta:
        ordering = ['atomic_number']
        unique_together = ['atomic_number', 'group']
        verbose_name = 'Periodic Table Elements'
        verbose_name_plural = 'Periodic Table Elements'

    def __str__(self):
        return self.name
