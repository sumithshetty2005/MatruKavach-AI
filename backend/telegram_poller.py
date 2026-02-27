import requests
import time
import sys

TOKEN = "8553661113:AAEU_KhpKEEK4JN75t5Ie41y3ewJVPAxSmg"
API_URL = f"https://api.telegram.org/bot{TOKEN}"
WEBHOOK_URL = "http://localhost:8000/webhook/telegram"

def main():
    print("Deleting webhook to enable getUpdates...")
    requests.get(f"{API_URL}/deleteWebhook")

    offset = 0
    print(f"Starting Telegram Poller, forwarding to {WEBHOOK_URL}...")
    while True:
        try:
            response = requests.get(f"{API_URL}/getUpdates?offset={offset}&timeout=30").json()
            if response.get("ok"):
                for update in response["result"]:
                    print(f"Received update: {update['update_id']}")
                    if "message" in update or "callback_query" in update:
                        try:
                            res = requests.post(WEBHOOK_URL, json=update)
                            print(f"Forwarded update {update['update_id']}, status: {res.status_code}")
                        except Exception as e:
                            print(f"Error forwarding: {e}")
                    offset = update["update_id"] + 1
        except Exception as e:
            print(f"Polling error: {e}")
        time.sleep(1)

if __name__ == "__main__":
    main()
