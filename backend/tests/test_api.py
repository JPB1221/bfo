# Backend API tests for Bare Force One LLC - Pre-launch testing iteration 6
# Tests: Health endpoint, Contact form, Request Proposal form with validation

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthEndpoint:
    """Health endpoint tests"""
    
    def test_health_returns_200(self):
        """Test /api/health returns 200 status"""
        response = requests.get(f"{BASE_URL}/api/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert data["service"] == "Bare Force One API"
        print(f"✓ Health check passed: {data}")


class TestContactForm:
    """Contact form API tests"""
    
    def test_contact_valid_submission(self):
        """Test valid contact form submission"""
        payload = {
            "name": "TEST_John Prelaunch",
            "email": "test_prelaunch@example.com",
            "organization": "Test Corp",
            "message": "This is a pre-launch test message",
            "sector": "Enterprise"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "message" in data
        print(f"✓ Contact submission successful: {data}")
    
    def test_contact_minimal_fields(self):
        """Test contact with only required fields (name, email, message)"""
        payload = {
            "name": "TEST_Minimal User",
            "email": "minimal@test.com",
            "message": "Minimal test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        print(f"✓ Contact minimal fields submission successful: {data}")
    
    def test_contact_empty_name_rejected(self):
        """Test contact rejects empty name"""
        payload = {
            "name": "   ",
            "email": "test@example.com",
            "message": "Test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422
        print("✓ Empty name correctly rejected with 422")
    
    def test_contact_invalid_email_rejected(self):
        """Test contact rejects invalid email"""
        payload = {
            "name": "Test User",
            "email": "invalid-email",
            "message": "Test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422
        print("✓ Invalid email correctly rejected with 422")
    
    def test_contact_empty_message_rejected(self):
        """Test contact rejects empty message"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "   "
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422
        print("✓ Empty message correctly rejected with 422")


class TestRequestProposal:
    """Request Proposal API tests"""
    
    def test_proposal_valid_submission(self):
        """Test valid proposal request submission"""
        payload = {
            "name": "TEST_Proposal User",
            "email": "proposal_prelaunch@example.com",
            "organization": "Prelaunch Corp",
            "sector": "Government / Public Sector",
            "project_type": "Custom Software Development",
            "timeline": "3-6 months",
            "budget_range": "$50,000 - $100,000",
            "description": "Pre-launch test proposal for government software project",
            "security_requirements": "NIST compliance required",
            "integration_needs": "CRM integration needed"
        }
        response = requests.post(f"{BASE_URL}/api/request-proposal", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "message" in data
        print(f"✓ Proposal submission successful: {data}")
    
    def test_proposal_minimal_fields(self):
        """Test proposal with only required fields"""
        payload = {
            "name": "TEST_Minimal Proposal",
            "email": "minimal_proposal@test.com",
            "organization": "Minimal Org",
            "sector": "Enterprise",
            "description": "Minimal proposal description"
        }
        response = requests.post(f"{BASE_URL}/api/request-proposal", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        print(f"✓ Proposal minimal fields submission successful: {data}")
    
    def test_proposal_empty_name_rejected(self):
        """Test proposal rejects empty name"""
        payload = {
            "name": "   ",
            "email": "test@example.com",
            "organization": "Test Org",
            "sector": "Enterprise",
            "description": "Test description"
        }
        response = requests.post(f"{BASE_URL}/api/request-proposal", json=payload)
        assert response.status_code == 422
        print("✓ Proposal empty name correctly rejected with 422")
    
    def test_proposal_invalid_email_rejected(self):
        """Test proposal rejects invalid email"""
        payload = {
            "name": "Test User",
            "email": "not-an-email",
            "organization": "Test Org",
            "sector": "Enterprise",
            "description": "Test description"
        }
        response = requests.post(f"{BASE_URL}/api/request-proposal", json=payload)
        assert response.status_code == 422
        print("✓ Proposal invalid email correctly rejected with 422")
    
    def test_proposal_empty_organization_rejected(self):
        """Test proposal rejects empty organization"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "organization": "   ",
            "sector": "Enterprise",
            "description": "Test description"
        }
        response = requests.post(f"{BASE_URL}/api/request-proposal", json=payload)
        assert response.status_code == 422
        print("✓ Proposal empty organization correctly rejected with 422")
    
    def test_proposal_empty_description_rejected(self):
        """Test proposal rejects empty description"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "organization": "Test Org",
            "sector": "Enterprise",
            "description": "   "
        }
        response = requests.post(f"{BASE_URL}/api/request-proposal", json=payload)
        assert response.status_code == 422
        print("✓ Proposal empty description correctly rejected with 422")


class TestCORSHeaders:
    """CORS configuration tests"""
    
    def test_cors_preflight(self):
        """Test CORS preflight request works (204 No Content is expected)"""
        headers = {
            "Origin": "https://example.com",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
        response = requests.options(f"{BASE_URL}/api/contact", headers=headers)
        # 204 No Content is the standard response for CORS preflight
        assert response.status_code in [200, 204]
        print(f"✓ CORS preflight request successful (status: {response.status_code})")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
