interface BlogIdPageProps{
        params: Promise<{ blogId: string }>;
    }

export default async function BlogIdPage({ params }: BlogIdPageProps) {  
    const { blogId } = await params;  
  return (
    <div>
      <h1>Hello from the post</h1>
      <p>Blog id: {blogId}</p>
    </div>
  );
}