from django.core.management.base import BaseCommand
import json
from Element.models import Element, Group, Block, Period
from .elements_data.s_block import elements as s_block
from .elements_data.p_block import elements as p_block
from .elements_data.d_block import elements as d_block
from .elements_data.f_block import elements as f_block


class Command(BaseCommand):
    help = 'This command create all Elements in database. '
    blocks = ['s', 'p', 'd', 'f']
    no_of_periods = 7
    no_of_groups = 18
    groups = []
    other_groups = []  # For Lan. and Act
    block_map = {}
    periods = []
    colors = {
        'Alkali Metal': '#ff6666',
        'Alkaline Earth Metal': '#fedead',
        'Transition Metal': '#ffc0bf',
        'Actinide': '#ff99cb',
        'Lanthanide': '#ffbffe',
        'Post Transition Metal': '#cccccc',
        'Other Non Metal': '#e8e8e8',
        'Metalloid': '#cccc9a',
        'Noble Gas': '#c1feff',
        'Halogen': '#f1ff90',
    }

    def handle(self, *args, **kwargs):
        self.create_sections('block')
        self.create_sections('period')
        self.create_sections('group')

        # create elements
        for key, block in self.block_map.items():
            if key == 's':
                self.create_elements(block, s_block)
            elif key == 'p':
                self.create_elements(block, p_block)
            elif key == 'd':
                self.create_elements(block, d_block)
            elif key == 'f':
                self.create_elements(block, f_block)
        self.stdout.write(self.style.SUCCESS("All elements created"))

    def create_elements(self, block, elements,):
        for e in elements:
            if int(e['group']) > 0:
                group = self.groups[int(e['group'])-1]
            else:
                # print(e)
                # print(self.other_groups)
                group = self.other_groups[int(e['group'])+1]

            el, _ = Element.objects.get_or_create(block=block, name=e['name'].capitalize(), atomic_mass=e['atomic_mass'], atomic_number=e['atomic_no'], symbol=e['symbol'],
                                                  np=e['np'], ne=e['ne'], nn=e['nn'], atomic_radius=e[
                'atomic_radius'], melting_point=e['melting_point'],
                boiling_point=e['boiling_point'], discovered_by=e['discoverer'].capitalize(), shells=e[
                'shells'], electronegativity=e['electronegativity'], valence=e['valence'], _type=e['type'],
                natural=self.get_bool(e['natural']), color=self.colors[e['type']], metal=self.get_bool(e['metal']), non_metal=self.get_bool(e['non_metal']), metalloid=self.get_bool(e['metalloid']), group=group, radioactive=self.get_bool(e['radioactive']),
                period=self.periods[
                int(e['period'])-1], first_ionization=e['first_ionization'], specific_heat=e['specific_heat'], density=e['density'],
                phase=e['phase'].capitalize()
            )
            el.save()

    def create_sections(self, _type):
        if _type == 'period':
            for period in range(1, self.no_of_periods+1):
                p, _ = Period.objects.get_or_create(name=period)
                self.periods.append(p)
                p.save()

        elif _type == "group":
            for group in range(-1, self.no_of_groups+1):  # -1 and 0 for f block
                g, _ = Group.objects.get_or_create(name=group)
                if g.name <= 0:
                    self.other_groups.append(g)
                else:
                    self.groups.append(g)
                g.save()
                self.add_to_block(g)

        elif _type == "block":
            for block in self.blocks:
                b, _ = Block.objects.get_or_create(name=block)
                self.block_map[block] = b
                b.save()

    def get_bool(self, value):
        if value.lower() == 'true':
            return True
        return False

    def add_to_block(self, group):
        if group.name == 1 or group.name == 2:
            group.block = self.block_map['s']
        elif group.name > 2 and group.name < 13:
            group.block = self.block_map['d']
        elif group.name > 12 and group.name <= 18:
            group.block = self.block_map['p']
        elif group.name == -1 or group.name == 0:
            group.block = self.block_map['f']
        group.save()
