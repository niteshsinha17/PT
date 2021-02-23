from rest_framework.serializers import ModelSerializer, SerializerMethodField
from Element.models import Element, Block, Group


class ElementSerializer(ModelSerializer):
    group = SerializerMethodField('is_group')
    period = SerializerMethodField('is_period')

    def is_group(self, Element):
        group = Element.group
        return group.name

    def is_period(self, Element):
        period = Element.period
        return period.name

    class Meta:
        model = Element
        fields = ['id', 'name', 'atomic_number', 'symbol', 'period', 'block',
                  'group', 'metal', 'non_metal', 'metalloid', '_type', 'color',
                  ]


class GroupSerializer(ModelSerializer):
    elements = ElementSerializer(many=True, read_only=True)

    class Meta:
        model = Group
        fields = ['elements']


class BlockSerializer(ModelSerializer):
    groups = GroupSerializer(many=True, read_only=True)

    class Meta:
        model = Block
        fields = ['name', 'groups']


class ElementDetailSerializer(ModelSerializer):
    class Meta:
        model = Element
        fields = '__all__'
