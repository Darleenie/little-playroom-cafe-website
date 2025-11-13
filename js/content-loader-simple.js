// Simple Content Loader for Little Playroom Cafe
// This script automatically loads content from content/website-content.txt
// and populates the HTML elements dynamically

class SimpleContentLoader {
    constructor() {
        this.content = null;
        this.currentPage = this.getCurrentPage();
        this.isRefreshing = false;
        this.htmlContentKeys = new Set([
            'description',
            'about_description_1',
            'about_description_2'
        ]);
        console.log('SimpleContentLoader initialized for page:', this.currentPage);
    }

    // Get current page name from URL
    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('about.html')) return 'about';
        if (path.includes('menu.html')) return 'menu';
        if (path.includes('party.html')) return 'party';
        if (path.includes('contact.html')) return 'contact';
        if (path.includes('rules.html')) return 'rules';
        if (path.includes('partnership.html')) return 'partnership';
        if (path.includes('waiver.html')) return 'waiver';
        if (path.includes('gallery.html')) return 'gallery';
        if (path.includes('reservation.html')) return 'reservation';
        return 'home'; // Default to home page
    }

    // Get the correct content file path based on current page location
    getContentPath() {
        // Use absolute path from root to avoid path issues
        return '/content/website-content.txt';
    }

    // Load content from the text file
    async loadContent() {
        try {
            // Determine the correct path based on current page location
            const contentPath = this.getContentPath();
            console.log('Loading content from', contentPath);
            const response = await fetch(contentPath + '?t=' + Date.now());
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} - URL: ${contentPath}`);
            }
            const text = await response.text();
            console.log('Content loaded successfully, length:', text.length);
            
            // Parse the content manually for now
            this.content = this.parseContentSimple(text);
            console.log('Parsed content:', this.content);
            
            this.populatePage();
        } catch (error) {
            console.error('Failed to load content:', error);
        }
    }

    // Start auto-refresh to check for content changes
    startAutoRefresh() {
        // Check for changes every 3 seconds
        setInterval(() => {
            if (!this.isRefreshing) {
                this.isRefreshing = true;
                this.loadContent().finally(() => {
                    this.isRefreshing = false;
                });
            }
        }, 3000);
        
        console.log('Auto-refresh started - checking for content changes every 3 seconds');
    }

    // Simple content parser
    parseContentSimple(text) {
        const content = {};

        const extractSection = (sectionName) => {
            const sectionRegex = new RegExp(`${sectionName}:([\\s\\S]*?)(?=\\n[A-Z][A-Z\\s&]+:|\\n={3,}|$)`, 'i');
            const match = text.match(sectionRegex);
            return match ? match[1] : null;
        };

        const extractField = (sectionText, fieldLabel) => {
            if (!sectionText) return null;
            const fieldRegex = new RegExp(`- ${fieldLabel}: "([\\s\\S]*?)"`, 'i');
            const match = sectionText.match(fieldRegex);
            return match ? match[1].trim() : null;
        };

        const extractMultilineField = (sectionText, fieldLabel) => {
            const rawValue = extractField(sectionText, fieldLabel);
            return this.formatMultilineText(rawValue);
        };

        // Extract main title from the content file
        const mainTitleMatch = text.match(/- Main title: "([^"]+)"/);
        if (mainTitleMatch) {
            content.main_title = mainTitleMatch[1];
            console.log('Found main title:', content.main_title);
        }
        
        // Extract welcome text
        const welcomeMatch = text.match(/- Welcome text: "([^"]+)"/);
        if (welcomeMatch) {
            content.welcome_text = welcomeMatch[1];
            console.log('Found welcome text:', content.welcome_text);
        }
        
        // Extract subtitle
        const subtitleMatch = text.match(/- Subtitle: "([^"]+)"/);
        if (subtitleMatch) {
            content.subtitle = subtitleMatch[1];
            console.log('Found subtitle:', content.subtitle);
        }
        
        // Extract description (handle multi-line descriptions)
        // Look for description in HERO SECTION specifically
        const heroSectionMatch = text.match(/HERO SECTION:([\s\S]*?)(?=QUICK NAVIGATION:|$)/);
        if (heroSectionMatch) {
            const descMatch = heroSectionMatch[1].match(/- Description: "([\s\S]*?)"\s*\n/);
            if (descMatch) {
                content.description = descMatch[1].trim().replace(/\n\s+/g, '<br>');
                console.log('Found hero description:', content.description);
            }
        }
        
        // Extract CTA button
        const ctaMatch = text.match(/- CTA button: "([^"]+)"/);
        if (ctaMatch) {
            content.cta_button = ctaMatch[1];
            console.log('Found CTA button:', content.cta_button);
        }
        
        // Extract tagline title
        const taglineMatch = text.match(/- Title: "([^"]+)"/);
        if (taglineMatch) {
            content.tagline_title = taglineMatch[1];
            console.log('Found tagline title:', content.tagline_title);
        }
        
        // Extract tagline description
        const taglineDescMatch = text.match(/- Description: "([^"]+)"/);
        if (taglineDescMatch) {
            content.tagline_description = taglineDescMatch[1];
            console.log('Found tagline description:', content.tagline_description);
        }

        // Extract About Preview section
        const aboutPreviewSection = extractSection('ABOUT PREVIEW');
        if (aboutPreviewSection) {
            const aboutTitle = extractField(aboutPreviewSection, 'Title');
            if (aboutTitle) {
                content.about_title = aboutTitle;
                console.log('Found about title:', content.about_title);
            }

            const aboutDescription1 = extractMultilineField(aboutPreviewSection, 'Description 1');
            if (aboutDescription1) {
                content.about_description_1 = aboutDescription1;
                console.log('Found about description 1:', content.about_description_1);
            }

            const aboutDescription2 = extractMultilineField(aboutPreviewSection, 'Description 2');
            if (aboutDescription2) {
                content.about_description_2 = aboutDescription2;
                console.log('Found about description 2:', content.about_description_2);
            }

            const aboutCta = extractField(aboutPreviewSection, 'CTA button');
            if (aboutCta) {
                content.about_cta = aboutCta;
                console.log('Found about CTA:', content.about_cta);
            }
        }
        
        // Extract party page content
        const basePackageMatch = text.match(/- Base Package: "([^"]+)"/);
        if (basePackageMatch) {
            content.base_package = basePackageMatch[1];
            console.log('Found base package:', content.base_package);
        }
        
        const packageIncludesMatch = text.match(/- Package Includes: "([^"]+)"/);
        if (packageIncludesMatch) {
            content.package_includes = packageIncludesMatch[1].split(', ').join('<br>');
            console.log('Found package includes:', content.package_includes);
        }
        
        return content;
    }

    formatMultilineText(value) {
        if (!value) return value;
        const normalized = value.replace(/\r\n/g, '\n').trim();
        return normalized
            .replace(/\n[ \t]*\n/g, '<br><br>')
            .replace(/\n/g, '<br>');
    }

    // Populate the current page with loaded content
    populatePage() {
        if (!this.content) {
            console.warn('No content to populate');
            return;
        }

        console.log('Populating page with content:', this.content);
        
        // Update all elements with data-content attributes
        this.updateAllElements();
    }

    // Update all elements with data-content attributes
    updateAllElements() {
        // Find all elements with data-content attributes
        const elements = document.querySelectorAll('[data-content]');
        console.log(`Found ${elements.length} elements with data-content attributes`);
        
        let hasUpdates = false;
        elements.forEach(element => {
            const contentKey = element.getAttribute('data-content');
            const contentValue = this.content[contentKey];
            
            if (contentValue) {
                // Only update if content has changed
                const currentContent = this.htmlContentKeys.has(contentKey)
                    ? element.innerHTML
                    : element.textContent;
                if (currentContent !== contentValue) {
                    console.log(`Updating ${contentKey} with: ${contentValue}`);
                    // Use innerHTML for description field to support HTML formatting
                    if (this.htmlContentKeys.has(contentKey)) {
                        element.innerHTML = contentValue;
                    } else {
                        element.textContent = contentValue;
                    }
                    hasUpdates = true;
                }
            } else {
                console.log(`No content found for key: ${contentKey}`);
            }
        });
        
        if (hasUpdates) {
            console.log('✅ Content updated successfully!');
        }
    }
}

// Initialize content loader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing SimpleContentLoader...');
    const contentLoader = new SimpleContentLoader();
    contentLoader.loadContent();
    contentLoader.startAutoRefresh();
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimpleContentLoader;
}
