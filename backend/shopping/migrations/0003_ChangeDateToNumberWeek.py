# Generated by Django 4.0.5 on 2022-06-23 19:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0002_remove_shoppinglist_products_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shoppinglist',
            old_name='date',
            new_name='weekNumber',
        ),
    ]