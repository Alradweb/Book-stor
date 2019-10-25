import { useRouter } from 'next/router';
import PageLayout from '../../components/layout/PageLayout';

export default function BookDetails() {
    const router = useRouter();

    return (
        <PageLayout title={router.query.title}>
            <h1 style={{color: 'white'}}>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </PageLayout>
    )
}