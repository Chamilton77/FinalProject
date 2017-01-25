class ResumeController < ApplicationController
  def homepage
  end

  def sendMail
  	@mail = Pony.mail(:to =>'cjcham77@gmail.com', :via => :smtp, :from => params[:email], :subject => params[:subject], :body => params[:emailbody])
	redirect_to root_path
  end
end
