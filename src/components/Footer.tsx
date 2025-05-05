export function Footer() {
    return (
      <footer className="py-10 bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none dark:text-white transition-all duration-300  border-t text-center text-sm  text-gray-500">
        © {new Date().getFullYear()} DevRhylme Foundation. All rights reserved.
      </footer>
    );
  }

  export default Footer;