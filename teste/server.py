import http.server
import socketserver
import subprocess
import sys
import json

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def _set_json_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_json_headers()

    def do_POST(self):
        if self.path != '/run_whatzap':
            return super().do_POST()

        self._set_json_headers()
        try:
            proc = subprocess.Popen(
                [sys.executable, 'whatzap.py'],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            out, err = proc.communicate(timeout=120)
            resp = {'ok': True, 'stdout': out, 'stderr': err}
        except Exception as e:
            resp = {'ok': False, 'error': str(e)}

        self.wfile.write(json.dumps(resp).encode('utf-8'))


if __name__ == '__main__':
    print(f'Serving on http://localhost:{PORT} (press Ctrl+C to stop)')
    with socketserver.TCPServer(('', PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nShutting down...')
            httpd.server_close()
