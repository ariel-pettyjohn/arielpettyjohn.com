import SectionHeader from "../SectionHeader/SectionHeader";

export default function Section ({ children, className, heading }) {
    return (
        <section className={className}>
            {heading ? <SectionHeader>{heading}</SectionHeader> : null}
            
            {children}
        </section>  
    );
}