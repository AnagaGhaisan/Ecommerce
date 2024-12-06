import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:e_commerce/components/Item_popular_product.dart';
import 'package:e_commerce/model/products.dart';
import 'package:e_commerce/screens/details/detail_screen.dart';
import 'package:e_commerce/screens/home/components/section_title.dart';
import 'package:e_commerce/size_config.dart';
import 'package:e_commerce/state_managements/favorite_provider.dart';

class PopularProducts extends StatelessWidget {
  const PopularProducts({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: EdgeInsets.symmetric(horizontal: getPropScreenWidth(20)),
          child: const SectionTitle(
            title: "Popular Products",
          ),
        ),
        SizedBox(height: getPropScreenHeight(20)),
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: SizedBox(
            height: getPropScreenWidth(220),
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: getPropScreenWidth(10)),
              child: Consumer<FavoriteProvider>(
                builder: (context, products, child) => Row(
                  children: List.generate(products.listProducts.length, (index) {
                    final Product product = products.listProducts[index];
                    return ItemPopularProduct(
                      product: product,
                      press: () => Navigator.pushNamed(
                          context, DetailScreen.routeName,
                          arguments: product),
                    );
                  }),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
