export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-nv-outline-variant bg-nv-surface-container-lowest py-12">
      <div className="mx-auto flex max-w-[container-max] flex-col items-center gap-4 px-4 md:px-margin-desktop">
        <div className="flex flex-wrap justify-center gap-6 font-label-sm text-label-sm">
          {['Privacy Policy', 'Legal', 'Cookie Settings', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-nv-on-secondary-container underline opacity-80 transition-all hover:text-nv-primary hover:opacity-100"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="font-label-sm text-label-sm text-nv-on-secondary-container opacity-60">
          © 2024 NVIDIA Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
