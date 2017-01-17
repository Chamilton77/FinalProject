require 'test_helper'

class ResumeControllerTest < ActionDispatch::IntegrationTest
  test "should get homepage" do
    get resume_homepage_url
    assert_response :success
  end

end
