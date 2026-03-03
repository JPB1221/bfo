import requests
import sys
import json
from datetime import datetime

class BareForceOneAPITester:
    def __init__(self, base_url="https://b0505bab-818b-4cde-921a-444c649ea1fe.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test": name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {name}")
        if details:
            print(f"    {details}")
        return success

    def test_health_endpoint(self):
        """Test /api/health endpoint"""
        try:
            url = f"{self.base_url}/api/health"
            response = requests.get(url, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("status") == "healthy":
                    return self.log_test(
                        "Health Endpoint",
                        True,
                        f"Status: {response.status_code}, Response: {data}"
                    )
                else:
                    return self.log_test(
                        "Health Endpoint",
                        False,
                        f"Unexpected response: {data}"
                    )
            else:
                return self.log_test(
                    "Health Endpoint",
                    False,
                    f"Status: {response.status_code}, Text: {response.text}"
                )
        except Exception as e:
            return self.log_test("Health Endpoint", False, f"Error: {str(e)}")

    def test_contact_submission(self):
        """Test POST /api/contact endpoint"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com", 
            "organization": "Test Company",
            "sector": "Enterprise",
            "message": "This is a test message from the automated testing suite."
        }
        
        try:
            url = f"{self.base_url}/api/contact"
            response = requests.post(
                url,
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=15
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "message" in data:
                    return self.log_test(
                        "Contact Form Submission",
                        True,
                        f"Status: {response.status_code}, Response: {data}"
                    )
                else:
                    return self.log_test(
                        "Contact Form Submission",
                        False,
                        f"Unexpected response format: {data}"
                    )
            else:
                return self.log_test(
                    "Contact Form Submission",
                    False,
                    f"Status: {response.status_code}, Text: {response.text}"
                )
        except Exception as e:
            return self.log_test("Contact Form Submission", False, f"Error: {str(e)}")

    def test_contact_validation(self):
        """Test contact form validation with missing required fields"""
        invalid_data = {
            "name": "",
            "email": "invalid-email",
            "message": ""
        }
        
        try:
            url = f"{self.base_url}/api/contact"
            response = requests.post(
                url,
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            # Expecting validation error (422 or 400)
            if response.status_code in [400, 422]:
                return self.log_test(
                    "Contact Form Validation",
                    True,
                    f"Correctly rejected invalid data with status: {response.status_code}"
                )
            else:
                return self.log_test(
                    "Contact Form Validation",
                    False,
                    f"Should reject invalid data, got status: {response.status_code}"
                )
        except Exception as e:
            return self.log_test("Contact Form Validation", False, f"Error: {str(e)}")

    def test_proposal_request_submission(self):
        """Test POST /api/request-proposal endpoint"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "organization": "Test Organization",
            "sector": "Government / Public Sector",
            "project_type": "Custom Software Development",
            "timeline": "3-6 months",
            "budget_range": "$50,000 - $100,000",
            "description": "This is a test proposal request from the automated testing suite.",
            "security_requirements": "NIST compliant",
            "integration_needs": "API integrations"
        }
        
        try:
            url = f"{self.base_url}/api/request-proposal"
            response = requests.post(
                url,
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=15
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "message" in data:
                    return self.log_test(
                        "Proposal Request Submission",
                        True,
                        f"Status: {response.status_code}, Response: {data}"
                    )
                else:
                    return self.log_test(
                        "Proposal Request Submission",
                        False,
                        f"Unexpected response format: {data}"
                    )
            else:
                return self.log_test(
                    "Proposal Request Submission",
                    False,
                    f"Status: {response.status_code}, Text: {response.text}"
                )
        except Exception as e:
            return self.log_test("Proposal Request Submission", False, f"Error: {str(e)}")

    def test_proposal_validation_empty_name(self):
        """Test proposal validation - empty name should be rejected"""
        invalid_data = {
            "name": "",
            "email": "test@example.com",
            "organization": "Test Org",
            "description": "Test description"
        }
        
        try:
            url = f"{self.base_url}/api/request-proposal"
            response = requests.post(
                url,
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 422:
                return self.log_test(
                    "Proposal Validation - Empty Name",
                    True,
                    f"Correctly rejected empty name with status: {response.status_code}"
                )
            else:
                return self.log_test(
                    "Proposal Validation - Empty Name",
                    False,
                    f"Should reject empty name, got status: {response.status_code}"
                )
        except Exception as e:
            return self.log_test("Proposal Validation - Empty Name", False, f"Error: {str(e)}")

    def test_proposal_validation_invalid_email(self):
        """Test proposal validation - invalid email should be rejected"""
        invalid_data = {
            "name": "Test User",
            "email": "invalid-email",
            "organization": "Test Org",
            "description": "Test description"
        }
        
        try:
            url = f"{self.base_url}/api/request-proposal"
            response = requests.post(
                url,
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 422:
                return self.log_test(
                    "Proposal Validation - Invalid Email",
                    True,
                    f"Correctly rejected invalid email with status: {response.status_code}"
                )
            else:
                return self.log_test(
                    "Proposal Validation - Invalid Email",
                    False,
                    f"Should reject invalid email, got status: {response.status_code}"
                )
        except Exception as e:
            return self.log_test("Proposal Validation - Invalid Email", False, f"Error: {str(e)}")

    def test_proposal_validation_empty_org(self):
        """Test proposal validation - empty organization should be rejected"""
        invalid_data = {
            "name": "Test User",
            "email": "test@example.com",
            "organization": "",
            "description": "Test description"
        }
        
        try:
            url = f"{self.base_url}/api/request-proposal"
            response = requests.post(
                url,
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 422:
                return self.log_test(
                    "Proposal Validation - Empty Organization",
                    True,
                    f"Correctly rejected empty organization with status: {response.status_code}"
                )
            else:
                return self.log_test(
                    "Proposal Validation - Empty Organization",
                    False,
                    f"Should reject empty organization, got status: {response.status_code}"
                )
        except Exception as e:
            return self.log_test("Proposal Validation - Empty Organization", False, f"Error: {str(e)}")

    def test_proposal_validation_empty_description(self):
        """Test proposal validation - empty description should be rejected"""
        invalid_data = {
            "name": "Test User",
            "email": "test@example.com",
            "organization": "Test Org",
            "description": ""
        }
        
        try:
            url = f"{self.base_url}/api/request-proposal"
            response = requests.post(
                url,
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 422:
                return self.log_test(
                    "Proposal Validation - Empty Description",
                    True,
                    f"Correctly rejected empty description with status: {response.status_code}"
                )
            else:
                return self.log_test(
                    "Proposal Validation - Empty Description",
                    False,
                    f"Should reject empty description, got status: {response.status_code}"
                )
        except Exception as e:
            return self.log_test("Proposal Validation - Empty Description", False, f"Error: {str(e)}")

    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            url = f"{self.base_url}/api/health"
            response = requests.get(url, timeout=10)
            
            cors_header = response.headers.get('access-control-allow-origin')
            if cors_header:
                return self.log_test(
                    "CORS Headers",
                    True,
                    f"CORS header found: {cors_header}"
                )
            else:
                return self.log_test(
                    "CORS Headers",
                    False,
                    "No CORS headers found in response"
                )
        except Exception as e:
            return self.log_test("CORS Headers", False, f"Error: {str(e)}")

    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests for Bare Force One")
        print(f"📍 Base URL: {self.base_url}")
        print("-" * 60)
        
        # Run tests
        self.test_health_endpoint()
        self.test_contact_submission()
        self.test_contact_validation()
        self.test_proposal_request_submission()
        self.test_proposal_validation_empty_name()
        self.test_proposal_validation_invalid_email()
        self.test_proposal_validation_empty_org()
        self.test_proposal_validation_empty_description()
        self.test_cors_headers()
        
        # Summary
        print("-" * 60)
        print(f"📊 Backend Tests Summary:")
        print(f"   Total: {self.tests_run}")
        print(f"   Passed: {self.tests_passed}")
        print(f"   Failed: {self.tests_run - self.tests_passed}")
        success_rate = (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
        print(f"   Success Rate: {success_rate:.1f}%")
        
        return self.tests_passed == self.tests_run

def main():
    tester = BareForceOneAPITester()
    success = tester.run_all_tests()
    
    # Save results to file
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            'summary': {
                'total_tests': tester.tests_run,
                'passed_tests': tester.tests_passed,
                'failed_tests': tester.tests_run - tester.tests_passed,
                'success_rate': (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
            },
            'results': tester.results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())