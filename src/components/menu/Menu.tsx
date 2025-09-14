import StaggeredMenu from "@/components/ui/StaggeredMenu";

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about me', link: '/about' },
    { label: 'Skills', ariaLabel: 'View our services', link: '/services' },
    { label: 'Projects', ariaLabel: 'View our services', link: '/services' },
    { label: 'Refuses', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function Menu() {
    return (
        <div className="h-screen">
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={false}
                menuButtonColor="#fff"
                openMenuButtonColor="#7c86ff"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#7c86ff']}
                logoUrl=""
                accentColor="#7c86ff"
            />
        </div>
    );
}