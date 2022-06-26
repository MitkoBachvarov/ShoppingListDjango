# Generated by Django 4.0.5 on 2022-06-26 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0003_ChangeDateToNumberWeek'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shoppinglist',
            name='type',
        ),
        migrations.AddField(
            model_name='shoppinglist',
            name='products',
            field=models.ManyToManyField(to='shopping.product'),
        ),
    ]
