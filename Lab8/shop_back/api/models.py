from django.db import models

# Create your models here.


class Category(models.Model):

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    name = models.CharField(verbose_name="Название", max_length=200)

    def str(self):
        return self.name


class Product(models.Model):

    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"
        ordering = ['id']

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(verbose_name='Название', max_length=200)
    is_active = models.BooleanField(verbose_name="В наличии")
    description = models.TextField(verbose_name='Описание')
    count = models.IntegerField(verbose_name="Количество")
    price = models.FloatField(verbose_name="Стоимость")

    def str(self):
        return self.name
