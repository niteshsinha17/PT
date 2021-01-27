from django.db import models

# Create your models here.

class Group(models.Model):
	"""docstring for ClassName"""

	Group_name = models.IntegerField(default=0, blank=True)
	class Meta:
		verbose_name_plural = "Group"

	def __str__(self):
		return str(self.Group_name)


class Period(models.Model):
	"""docstring for Period"""

	Period_name = models.IntegerField(default=0, blank=True)
	class Meta:
		verbose_name_plural = "Period"

	def __str__(self):
		return str(self.Period_name)

class Block(models.Model):
	"""docstring for Block"""
	BLOCK_CATEGORIES = (
    ('s', 's'),
    ('p', 'p'),
    ('d', 'd'),
    ('f', 'f')
    )

	Block_name = models.CharField(max_length=30, blank=True, choices=BLOCK_CATEGORIES)

	class Meta:
		verbose_name_plural = "Block"

	def __str__(self):
		return self.Block_name

class Element(models.Model):
	"""docstring for Element"""

	PHASE_CATEGORIES = (
    ('solid', 'solid'),
    ('gas', 'gas'),
    ('liq', 'liq'),
    ('artificial', 'artificial')
    )

	TYPE_CATEGORIES = (
    ('Transition_Metal', 'Transition_Metal'),
    ('Actinide', 'Actinide'),
    ('Lanthanide', 'Lanthanide'),
    ('Transactinide', 'Transactinide'),
    ('Nonmetal', 'Nonmetal'),
    ('Metal', 'Metal'),
    ('Metalloid', 'Metalloid'),
    ('Noble_Gas', 'Noble_Gas'),
    ('Alkali_Metal', 'Alkali_Metal'),
    ('Alkaline_Earth_Metal', 'Alkaline_Earth_Metal'),
    ('Halogen', 'Halogen'),
    ('Not_defined','Not_defined')
    )

	AtomicNumber = models.IntegerField(default=1, blank=True)	
	Element	= models.CharField(default='', blank=True, max_length=200)
	Symbol	= models.CharField(default='', blank=True, max_length=20)
	Block	= models.ForeignKey(Block,null=True, blank=True, on_delete=models.SET_NULL)
	AtomicMass = models.FloatField(default=0.0, blank=True)
	NumberofNeutrons = models.IntegerField(default=0, blank=True)
	NumberofProtons	= models.IntegerField(default=0, blank=True)
	NumberofElectrons = models.IntegerField(default=0, blank=True)
	Period = models.ForeignKey(Period,null=True, blank=True, on_delete=models.SET_NULL)
	Group = models.ForeignKey(Group,null=True, blank=True, on_delete=models.SET_NULL)
	Phase = models.CharField(max_length=30, choices=PHASE_CATEGORIES)
	Radioactive	= models.BooleanField(default=False, blank=True)
	Natural	= models.BooleanField(default=False, blank=True)
	Metal = models.BooleanField(default=False, blank=True)
	Nonmetal = models.BooleanField(default=False, blank=True)
	Metalloid = models.BooleanField(default=False, blank=True)
	Type = models.CharField(max_length=30, choices=TYPE_CATEGORIES)
	AtomicRadius = models.FloatField(default=0.0, blank=True)
	Electronegativity = models.FloatField(default=0.0, blank=True)
	FirstIonization	= models.FloatField(default=0.0, blank=True)
	Density	= models.FloatField(default=0.0, blank=True)
	MeltingPoint = models.FloatField(default=0.0, blank=True)	
	BoilingPoint = models.FloatField(default=0.0, blank=True)
	NumberOfIsotopes = models.IntegerField(default=0, blank=True)
	Discoverer = models.CharField(default='', blank=True, max_length=200)
	Year = models.IntegerField(default=0, blank=True)
	SpecificHeat = models.FloatField(default=0.0, blank=True)
	NumberofShells = models.IntegerField(default=0, blank=True)
	NumberofValence = models.IntegerField(default=0, blank=True)

	def __str__(self):
		return self.Element
