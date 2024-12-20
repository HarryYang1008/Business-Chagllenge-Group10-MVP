import React, { useState } from "react";

const SentimentAnalysis = () => {
  const [text, setText] = useState(""); // 用于存储用户输入的文本
  const [analysisResult, setAnalysisResult] = useState(null); // 用于存储分析结果

  const analyzeSentiment = async () => {
    const apiKey = "AIzaSyCVwM1EOR8z-_YtNF63oLVTF_ymfYqTWL8"; // 替换为您的API密钥
    const url = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${apiKey}`;
  
    const requestBody = {
      document: {
        type: "PLAIN_TEXT",
        content: text,
      },
      encodingType: "UTF8",
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        const result = await response.json();
        // 提取情感分数和内容
        const extractedData = {
          sentimentScore: result.documentSentiment.score,
          sentimentMagnitude: result.documentSentiment.magnitude,
          sentences: result.sentences.map((sentence) => ({
            text: sentence.text.content,
            score: sentence.sentiment.score,
          })),
        };
        setAnalysisResult(extractedData); // 存储提取后的信息
      } else {
        console.error("Error:", response.statusText);
        alert("情感分析失败，请检查输入或API设置！");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("请求失败，请检查网络连接！");
    }
  };
  
  return (
    <div style={{ padding: "20px" }}>
      <h1>Emotional Diary</h1>
      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="tell me something about today's life: "
        style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={analyzeSentiment}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        How do you feel today?
      </button>
      {analysisResult && (
        <div>
            <h2>Analysis result:</h2>
            <div>
                <div> The Max Score is 1</div>
                <p><strong style={{ textAlign: "left" }}>Overall Sentiment Score:</strong> {analysisResult.sentimentScore}</p>
                <h3>Sentence Analysis:</h3>
                <ul>
                    {analysisResult.sentences.map((sentence, index) => (
                    <li key={index} style={{ textAlign: "left" }}>
                        <strong>Sentence:</strong> {sentence.text} <br />
                        <strong>Sentiment Score:</strong> {sentence.score}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        )}

    </div>
  );
};

export default SentimentAnalysis;
