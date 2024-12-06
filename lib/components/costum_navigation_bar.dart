import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:e_commerce/constant.dart';
import 'package:e_commerce/screens/favourite/favourite_screen.dart';
import 'package:e_commerce/screens/home/home_screen.dart';
import 'package:e_commerce/screens/profile/profile_screen.dart';
import 'package:e_commerce/size_config.dart';

class CustomNavigationBar extends StatefulWidget {
  static String routeName = "/custom_navigation_bar";
  const CustomNavigationBar({super.key});

  @override
  State<CustomNavigationBar> createState() => _CustomNavigationBarState();
}

class _CustomNavigationBarState extends State<CustomNavigationBar> {
  int _selectedIndex = 0;

  final List<_NavItem> _navItems = [
    _NavItem("assets/icons/Shop Icon.svg", "Home", const HomeScreen()),
    _NavItem("assets/icons/Heart Icon.svg", "Favorite", const FavouriteScreen()),
    _NavItem("assets/icons/Chat bubble Icon.svg", "Chat", const Text("Chat")),
    _NavItem("assets/icons/User Icon.svg", "Profile", const ProfileScreen()),
  ];

  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return Scaffold(
      body: AnimatedSwitcher(
        duration: const Duration(milliseconds: 300),
        child: _navItems[_selectedIndex].screen,
      ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.only(left: 16, right: 16, bottom: 20),
        child: Container(
          height: 75, // Tinggi navigation bar diperbesar
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(40), // Radius lebih besar
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.15),
                blurRadius: 20,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: BottomNavigationBar(
            elevation: 0,
            backgroundColor: Colors.transparent, // Transparan karena dibungkus oleh Container
            type: BottomNavigationBarType.fixed,
            currentIndex: _selectedIndex,
            selectedItemColor: kPrimaryColor,
            unselectedItemColor: kTextColor.withOpacity(0.6),
            selectedFontSize: 14,
            unselectedFontSize: 12,
            onTap: (value) {
              setState(() {
                _selectedIndex = value;
              });
            },
            items: _navItems.map((item) {
              int index = _navItems.indexOf(item);
              return BottomNavigationBarItem(
                icon: Tooltip(
                  message: item.label,
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 300),
                    width: _selectedIndex == index ? 32 : 28, // Ukuran icon lebih besar
                    height: _selectedIndex == index ? 32 : 28,
                    child: SvgPicture.asset(
                      item.iconPath,
                      color:
                          _selectedIndex == index ? kPrimaryColor : kTextColor,
                    ),
                  ),
                ),
                label: item.label,
              );
            }).toList(),
          ),
        ),
      ),
    );
  }
}

class _NavItem {
  final String iconPath;
  final String label;
  final Widget screen;

  _NavItem(this.iconPath, this.label, this.screen);
}
