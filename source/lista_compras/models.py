from django.db import models

class ListaItem(models.Model):
    nome = models.CharField(max_length=60)
    quantidade = models.PositiveSmallIntegerField()
    verificacao = models.BooleanField(default=False)
