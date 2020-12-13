# Generated by Django 3.1.3 on 2020-11-26 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0008_stock_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='balance_sheet',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='stock',
            name='cash_flow',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='stock',
            name='image_url',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='stock',
            name='income_statement',
            field=models.URLField(null=True),
        ),
    ]