import { useEffect } from "react";

export default function Spy() {
    useEffect(() => {
        const ratio = 0.1;
        const activate = function (elem) {
            const id = elem.getAttribute("id");
            const anchor = document.querySelector(`a[href="#${id}"]`);
            console.log(anchor)
            if (anchor === null || anchor === '#home') return null;
            anchor.parentElement.querySelectorAll('.active').forEach((node) => node.classList.remove("active"));
            anchor.classList.add('active');
        };

        const deactivate = function (elem) {
            const id = elem.getAttribute("id");
            const anchor = document.querySelector(`a[href="#${id}"]`);
            if (anchor === null) return null;
            anchor.classList.remove('active');
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activate(entry.target);
                } else {
                    deactivate(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            threshold: ratio,
        });
        const spies = document.querySelectorAll(".spy");
        spies.forEach((spy) => {
            observer.observe(spy);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
}
