# Content Update Guide

## How to Update Website Content Directly

### ✅ **No Scripts Needed - Just Edit the Text File!**

1. **Open `content/website-content.txt`**
2. **Make your changes** (like editing the hero section)
3. **Save the file**
4. **Refresh your browser** - changes appear automatically!

### 🔄 **How It Works**

The website automatically:
- Reads from `website-content.txt` every 5 seconds
- Updates the page content in real-time
- No manual HTML editing required!

### 📝 **Example: Changing the Main Title**

1. Open `content/website-content.txt`
2. Find the `HERO SECTION:` under `HOME PAGE`
3. Change this line:
   ```
   - Main title: "LITTLE PLAYROOM CAFÉ"
   ```
   To:
   ```
   - Main title: "YOUR NEW TITLE"
   ```
4. Save the file
5. Refresh your browser - the title changes instantly!

### 🎉 **Supported Content**

- **Hero Section**: Main title, subtitle, description
- **Party Pricing**: Base package, includes, additional pricing
- **Contact Info**: Address, email, phone, hours
- **And more sections can be added easily!**

### 🚀 **Benefits**

- ✅ Edit only text files
- ✅ No HTML knowledge needed
- ✅ Changes appear instantly
- ✅ No scripts to run
- ✅ Works on any device

### 🔧 **Technical Details**

The `js/content-loader.js` script:
- Loads content every 5 seconds
- Parses the text file automatically
- Updates page elements in real-time
- Works on all pages

**That's it!** Just edit the text file and your website updates automatically! 🎉
