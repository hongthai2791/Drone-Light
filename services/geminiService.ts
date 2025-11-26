import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

// Initialize Gemini client
// Note: In a production app, never expose API keys on the client side without proxies/security measures.
// For this demo, we assume the environment variable is injected safely.
const ai = new GoogleGenAI({ apiKey: apiKey });

export const generateDroneAdvice = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "Vui lòng cấu hình API Key để sử dụng tính năng Trợ lý AI.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      Bạn là 'SkyGuide AI', một chuyên gia hàng đầu về công nghệ Drone (Máy bay không người lái) tại Việt Nam.
      Vai trò của bạn là hỗ trợ người dùng trên website 'SkyHorizon'.
      
      Kiến thức của bạn bao gồm:
      1. Kỹ thuật: Cấu tạo drone, nguyên lý bay, pin, motor, FPV, camera.
      2. Hướng dẫn: Cách bay an toàn, quy trình bảo dưỡng, mẹo quay phim trên không.
      3. Pháp luật: Các quy định hiện hành về bay flycam tại Việt Nam (nghị định, vùng cấm bay).
      4. Tư vấn: Gợi ý mua drone phù hợp cho người mới, nhiếp ảnh gia, hoặc doanh nghiệp nông nghiệp.

      Phong cách trả lời:
      - Thân thiện, chuyên nghiệp, ngắn gọn và dễ hiểu.
      - Sử dụng tiếng Việt chuẩn.
      - Sử dụng định dạng Markdown (in đậm, danh sách) để dễ đọc.
      - Luôn nhắc nhở về an toàn bay nếu phù hợp.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Flash model usually doesn't need high thinking budget for chat
      }
    });

    return response.text || "Xin lỗi, tôi không thể xử lý yêu cầu lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với máy chủ AI. Vui lòng thử lại sau.";
  }
};