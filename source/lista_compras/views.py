from rest_framework import viewsets
#from rest_framework import ModelViewSet
from .models import ListaItem
from .serializers import ListaItemSerializer

class ListaItemViewSet(viewsets.ModelViewSet):
    serializer_class = ListaItemSerializer
    queryset = ListaItem.objects.all()


