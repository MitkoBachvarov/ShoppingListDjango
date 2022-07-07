# Generated by Django 4.0.5 on 2022-07-07 22:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0005_OptionalProducts'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('instructions', models.TextField()),
            ],
        ),
        migrations.RenameField(
            model_name='product',
            old_name='title',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='shoppinglist',
            old_name='title',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='product',
            name='description',
        ),
        migrations.RemoveField(
            model_name='shoppinglist',
            name='weekNumber',
        ),
        migrations.CreateModel(
            name='RecipeProducts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('amount', models.CharField(max_length=120)),
                ('availability', models.BooleanField(default=False)),
                ('recipeId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shopping.recipe')),
            ],
        ),
        migrations.AddField(
            model_name='recipe',
            name='products',
            field=models.ManyToManyField(to='shopping.product'),
        ),
        migrations.AddField(
            model_name='shoppinglist',
            name='recipeList',
            field=models.ManyToManyField(blank=True, to='shopping.recipe'),
        ),
    ]
