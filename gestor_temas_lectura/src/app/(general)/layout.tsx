import ProviderTema from '../Providers/ProviderTema';
import ProvidenProducto from '../Providers/ProviderTema'

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <ProviderTema>
                {children}
            </ProviderTema>
        </div>
    )
}