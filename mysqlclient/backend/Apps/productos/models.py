from django.db import models
from Apps.tipo_productos.models import TipoProducto

class Producto(models.Model):
    nombre = models.CharField(max_length=50, verbose_name="Nombre")
    marca = models.CharField(max_length=50, verbose_name="Marca")
    precio = models.FloatField(verbose_name="Precio")
    stockmin = models.IntegerField(verbose_name="Stock Minimo")
    cantidad = models.IntegerField(verbose_name="Cantidad")
    tipoproducto = models.ForeignKey(TipoProducto,
                                    null=True,
                                    blank=True,
                                    on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
    class Meta:
       db_table = 'productos'
       pass
