const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#313f24] border-t-[#C2F800] rounded-full animate-spin"></div>

      <p className="mt-5 text-[#C2F800] font-bold text-lg">
        💪 Getting your workout ready...
      </p>
    </div>
  );
};

export default Loading;