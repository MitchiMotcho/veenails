import Link from "next/link";
import { FaInstagram, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-3 items-start">
                    {/* Brand */}
                    <div>
                        <p className="text-base font-semibold">
                            Vee&apos;s Nail Studio
                        </p>
                        <p className="mt-2 text-sm text-muted">
                            Clean, modern nail services with easy online
                            booking.
                        </p>

                        <div className="mt-5 flex items-center gap-4">
                            <a
                                className="btn-link"
                                href="https://www.instagram.com/vee.nailsstudio"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-lg" />
                            </a>

                            <a
                                className="btn-link"
                                href="https://tiktok.com/@vee.nailstudio"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="TikTok"
                            >
                                <FaTiktok className="text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-sm font-semibold">Quick Links</p>
                        <ul className="mt-3 space-y-2 text-sm grid sm:grid-cols-2">
                            <li>
                                <Link
                                    className="text-muted transition-colors hover:text-link-hover"
                                    href="/pricing"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-muted transition-colors hover:text-link-hover"
                                    href="/gallery"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-muted transition-colors hover:text-link-hover"
                                    href="/booking"
                                >
                                    Booking
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-muted transition-colors hover:text-link-hover"
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <p className="text-sm font-semibold">
                            Hours &amp; Location
                        </p>

                        <div className="mt-3 space-y-3 text-sm text-muted">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt className="shrink-0" />
                                Toronto, ON (by appointment)
                            </p>
                        </div>

                        <div className="mt-5">
                            <Link href="/booking" className="btn-secondary">
                                Book an Appointment
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-link">
                            Vee&apos;s Nail Studio
                        </span>
                        . All rights reserved.
                    </p>

                    <p>
                        Website by{" "}
                        <a
                            className="btn-link text-xs"
                            href="https://motchi.ca"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Mitchi Motcho Websites
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
