interface StatusBadgeProps {
    status: 'Active' | 'Pending' | 'Inactive';
}

export function StatusBadge({status}: StatusBadgeProps) {
    const styles = {
        Active: 'bg-emerald-100 text-emerald-700 border-emerald-200',
        Pending: 'bg-amber-100 text-amber-700 border-amber-200',
        Inactive: 'bg-slate-100 text-slate-600 border-slate-200',
    };

    const currentStyle = styles[status as keyof typeof styles] || styles.Inactive;

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${currentStyle}`}>
            {status}
        </span>
    );
}