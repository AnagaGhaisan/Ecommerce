import 'package:flutter/material.dart';
import 'package:e_commerce/model/category_data.dart';
import 'package:e_commerce/screens/home/components/item_category.dart';
import 'package:e_commerce/size_config.dart';

class Categories extends StatelessWidget {
  const Categories({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(getPropScreenWidth(20)),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: List.generate(listCategory.length, (index) {
          final CategoryData category = listCategory[index];
          return ItemCategory(
            name: category.name,
            icon: category.icon,
          );
        }),
      ),
    );
  }
}
