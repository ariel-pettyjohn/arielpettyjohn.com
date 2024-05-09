import SectionHeader from "../SectionHeader/SectionHeader";

export default function Aside ({ children, className, heading }) {
    return (
        <aside className={className}>
            {heading ? <SectionHeader>{heading}</SectionHeader> : null}
            
            {children}
        </aside>  
    );
}