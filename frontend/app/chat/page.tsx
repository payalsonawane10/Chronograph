import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";
import ChatInput from "@/components/ChatInput";

export default function ChatPage() {
  return (
    <main className="flex bg-black min-h-screen">

      <ChatSidebar />

      <div className="flex-1 relative">
        <ChatWindow />
        <ChatInput />
      </div>
    </main>
  );
}