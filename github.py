import subprocess
import sys

def run(cmd):
    try:
        subprocess.check_call(cmd, shell=True)
    except subprocess.CalledProcessError:
        print(f"[ERROR] Gagal menjalankan: {cmd}")
        sys.exit(1)

print("=== GitHub Auto Uploader ===")

GITHUB_USERNAME = input("GitHub Username: ").strip()
REPO_NAME = input("Nama Repository: ").strip()
TOKEN = input("GitHub Token: ").strip()
COMMIT_MSG = input("Commit message (default: initial commit): ").strip()

if not COMMIT_MSG:
    COMMIT_MSG = "initial commit"

REPO_URL = f"https://{TOKEN}@github.com/{GITHUB_USERNAME}/{REPO_NAME}.git"

print("\n[1] Inisialisasi git")
run("git init")

print("[2] Tambah semua file")
run("git add .")

print("[3] Commit file")
run(f'git commit -m "{COMMIT_MSG}"')

print("[4] Set branch main")
run("git branch -M main")

print("[5] Set remote repository")
check_remote = subprocess.run(
    "git remote",
    shell=True,
    capture_output=True,
    text=True
)

if "origin" in check_remote.stdout:
    run("git remote remove origin")

run(f"git remote add origin {REPO_URL}")

print("[6] Push ke GitHub")
run("git push -u origin main")

print("\n✅ Upload BERHASIL ke GitHub!")