# Generated by Django 5.0.4 on 2024-04-23 03:24

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0008_folder"),
    ]

    operations = [
        migrations.RenameField(
            model_name="note",
            old_name="category",
            new_name="folder",
        ),
    ]
