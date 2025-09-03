# Website Content Modification Guide
## Using website-content.txt to Update Your Little Playroom Cafe Website

---

### 📋 Table of Contents
1. [Overview](#overview)
2. [How the Content System Works](#how-the-content-system-works)
3. [Finding and Editing Content](#finding-and-editing-content)
4. [Content Categories](#content-categories)
5. [Best Practices](#best-practices)
6. [Examples](#examples)
7. [Troubleshooting](#troubleshooting)

---

## Overview

Your Little Playroom Cafe website uses a simple content management system that allows you to easily update text content without touching HTML code. All modifiable content is stored in the `content/website-content.txt` file.

### What You Can Modify:
- ✅ **Text content** on all pages
- ✅ **Contact information** (phone, email, address)
- ✅ **Hours of operation**
- ✅ **Pricing information**
- ✅ **Menu items and descriptions**
- ✅ **Announcements and special offers**
- ✅ **Social media links**

### What You Cannot Modify:
- ❌ **Images** (must be replaced in imgur https://imgur.com/a/27yLEF6)
- ❌ **Page structure** (requires HTML editing)
- ❌ **Styling** (requires CSS editing)

---

## How the Content System Works

### 1. Content File Location
```
your-website/
├── content/
│   └── website-content.txt    # Main content file
├── pages/
│   ├── about.html
│   ├── contact.html
│   └── ...
└── js/
    └── content-loader-simple.js  # Loads content from file
```

### 2. Content Format
The `website-content.txt` file uses a simple key-value format:
```
KEY_NAME = Content that appears on the website
ANOTHER_KEY = More content here
```

### 3. Loading Process
1. JavaScript reads the `website-content.txt` file
2. Finds content keys in HTML elements
3. Replaces placeholder text with actual content
4. Updates the website automatically

---

## Finding and Editing Content

### Step 1: Locate the Content File
1. **Navigate to** your website folder
2. **Open** `content/website-content.txt`
3. **Use any text editor** (Notepad, VS Code, etc.)

### Step 2: Understand the Format
```
# This is a comment (starts with #)
PAGE_TITLE = Little Playroom Cafe - Your Content Here
SECTION_HEADING = Welcome to Our Cafe
DESCRIPTION_TEXT = This text will appear on your website
```

### Step 3: Make Your Changes
1. **Find** the content key you want to modify
2. **Edit** the text after the `=` sign
3. **Save** the file
4. **Upload** the file through github Desktop
5. **Refresh** your browser to see changes

### Step 4: Test Your Changes
1. **Open** your website in a browser
2. **Navigate** to the page you modified
3. **Verify** your changes appear correctly

---

## Content Categories

### 🏠 Homepage Content
```
HOMEPAGE_TITLE = Welcome to Little Playroom Cafe
HOMEPAGE_SUBTITLE = Not Your Ordinary Playground
HOMEPAGE_DESCRIPTION = Your description here
```

### 📞 Contact Information
```
CONTACT_PHONE = (555) 123-4567
CONTACT_EMAIL = playroommadison@gmail.com
CONTACT_ADDRESS = 7956 Tree Lane, Madison, WI 53717
```

### 🕒 Business Hours
```
HOURS_MON_THU = Mon–Thu: 9:30 AM - 8:00 PM
HOURS_FRI_SAT = Fri–Sat: 9:30 AM - 8:30 PM
HOURS_SUN = Sun: 9:30 AM - 8:00 PM
```

### 💰 Pricing Information
```
PARTY_BASE_PRICE = $450
PARTY_ADDITIONAL_GUEST = $29
ADMISSION_PRICE = $12
```

### 📱 Social Media Links
```
FACEBOOK_URL = https://www.facebook.com/your-page
INSTAGRAM_URL = https://www.instagram.com/your-page
TIKTOK_URL = https://www.tiktok.com/@your-account
```

### 🍕 Menu Items
```
MENU_ITEM_1 = Cheese Pizza - $12.99
MENU_ITEM_2 = Pepperoni Pizza - $14.99
MENU_DESCRIPTION_1 = Fresh mozzarella and tomato sauce
MENU_DESCRIPTION_2 = Classic pepperoni with cheese
```

### 📢 Announcements
```
ANNOUNCEMENT_TEXT = Special Offer: 20% off birthday parties this month!
ANNOUNCEMENT_DATE = Valid until December 31, 2024
```

---

## Best Practices

### ✅ Do's
- **Backup** the content file before making changes
- **Test** changes in a browser before deploying
- **Use** clear, descriptive content keys
- **Keep** text concise and readable
- **Review** spelling and grammar
- **Update** content regularly

### ❌ Don'ts
- **Don't change** the key names (before the `=` sign)
- **Don't delete** the `=` signs
- **Don't use** special characters that might break the system
- **Don't make** changes without testing first
- **Don't overwrite** the entire file without backup

### 📝 Content Guidelines
- **Keep it simple** - Use clear, straightforward language
- **Be consistent** - Use the same tone across all pages
- **Stay current** - Update information regularly
- **Check accuracy** - Verify all contact info and prices
- **Save backups** - Keep copies of working content

---

## Examples

### Example 1: Updating Contact Information
**Before:**
```
CONTACT_PHONE = (555) 123-4567
CONTACT_EMAIL = oldemail@example.com
```

**After:**
```
CONTACT_PHONE = (608) 234-5678
CONTACT_EMAIL = playroommadison@gmail.com
```

### Example 2: Changing Business Hours
**Before:**
```
HOURS_MON_THU = Mon–Thu: 9:30 AM - 8:00 PM
```

**After:**
```
HOURS_MON_THU = Mon–Thu: 10:00 AM - 9:00 PM
```

### Example 3: Updating Announcement
**Before:**
```
ANNOUNCEMENT_TEXT = Welcome to our new website!
```

**After:**
```
ANNOUNCEMENT_TEXT = Holiday Special: 15% off all party packages!
```

### Example 4: Modifying Menu Prices
**Before:**
```
MENU_PIZZA_PRICE = $12.99
MENU_DRINK_PRICE = $2.99
```

**After:**
```
MENU_PIZZA_PRICE = $14.99
MENU_DRINK_PRICE = $3.49
```

---

## Troubleshooting

### Common Issues and Solutions

#### ❌ Changes Not Appearing
**Problem:** You edited the content file but changes don't show on the website.

**Solutions:**
1. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)
2. **Check file location** - Make sure you're editing the correct file
3. **Verify syntax** - Ensure no extra spaces or characters
4. **Check key names** - Make sure they match exactly

#### ❌ Content Missing
**Problem:** Some content doesn't appear on the website.

**Solutions:**
1. **Check key names** - They must match exactly (case-sensitive)
2. **Verify file format** - Use `KEY = content` format
3. **Check for typos** - Ensure no extra spaces or characters
4. **Test in browser** - Refresh the page after changes

#### ❌ Special Characters Not Working
**Problem:** Special characters like ©, ™, or emojis don't display correctly.

**Solutions:**
1. **Use HTML entities** - `&copy;` for ©, `&trade;` for ™
2. **Check encoding** - Ensure file is saved as UTF-8
3. **Test characters** - Try simple text first

#### ❌ Long Text Getting Cut Off
**Problem:** Long content is being truncated on the website.

**Solutions:**
1. **Check CSS limits** - May need to adjust styling
2. **Break into sections** - Use multiple keys for long content
3. **Use shorter text** - Keep content concise
4. **Test layout** - Check how it looks on different screen sizes

---

## Advanced Tips

### 📝 Content Organization
- **Group related content** together in the file
- **Use comments** to separate sections
- **Keep backups** of working versions
- **Test thoroughly** before deploying

### 🔄 Regular Updates
- **Review content** monthly
- **Update prices** when they change
- **Check contact info** quarterly
- **Update hours** when they change
- **Refresh announcements** regularly

### 📱 Mobile Considerations
- **Keep text concise** for mobile users
- **Test on mobile** after making changes
- **Check readability** on small screens

---

## File Structure Reference

### Complete Content File Example
```
# ========================================
# LITTLE PLAYROOM CAFE - WEBSITE CONTENT
# ========================================

# Homepage Content
HOMEPAGE_TITLE = Welcome to Little Playroom Cafe
HOMEPAGE_SUBTITLE = Not Your Ordinary Playground
HOMEPAGE_DESCRIPTION = Your description here

# Contact Information
CONTACT_PHONE = (608) 234-5678
CONTACT_EMAIL = playroommadison@gmail.com
CONTACT_ADDRESS = 7956 Tree Lane, Madison, WI 53717

# Business Hours
HOURS_MON_THU = Mon–Thu: 9:30 AM - 8:00 PM
HOURS_FRI_SAT = Fri–Sat: 9:30 AM - 8:30 PM
HOURS_SUN = Sun: 9:30 AM - 8:00 PM

# Pricing
PARTY_BASE_PRICE = $450
PARTY_ADDITIONAL_GUEST = $29
ADMISSION_PRICE = $12

# Social Media
FACEBOOK_URL = https://www.facebook.com/share/176CcYP9hd/?mibextid=wwXIfr
INSTAGRAM_URL = https://www.instagram.com/littleplayroom_cafe/profilecard/?igsh=MXhhZnFldG4zZ2du
TIKTOK_URL = https://www.tiktok.com/@littleplayroomcafe?_t=ZP-8ydQzYplgul&_r=1

# Menu Items
MENU_ITEM_1 = Cheese Pizza
MENU_PRICE_1 = $12.99
MENU_DESCRIPTION_1 = Fresh mozzarella and tomato sauce

# Announcements
ANNOUNCEMENT_TEXT = Special Offer: 20% off birthday parties this month!
ANNOUNCEMENT_DATE = Valid until December 31, 2024
```

---

## Support and Resources

### 📞 Need Help?
- **Check this guide** for common solutions
- **Test in browser** before contacting support
- **Keep backups** of working content
- **Document changes** for future reference

### 🔧 Technical Notes
- **File encoding:** UTF-8
- **Line endings:** Unix/Linux format preferred
- **Backup strategy:** Keep multiple versions
- **Testing:** Always test changes before deployment

### 📚 Additional Resources
- **HTML basics** for understanding page structure
- **CSS basics** for styling considerations
- **JavaScript basics** for content loading
- **Web accessibility** guidelines for inclusive content

---

*This guide covers the essential information needed to effectively manage your website content using the `website-content.txt` file. For technical support or advanced modifications, consult with your web developer.*
