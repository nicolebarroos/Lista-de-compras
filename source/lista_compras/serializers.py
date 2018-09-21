from rest_framework import serializers
#from rest_framework import ModelSerializer
from .models import ListaItem

class ListaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListaItem
        fields = '__all__'