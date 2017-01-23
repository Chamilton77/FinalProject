class ResumeController < ApplicationController
  def homepage
  end

  def sendMail
  	@mail = Pony.mail(:to =>'cjcham77@gmail.com', :from => params[:email], :subject => params[:subject], :body => params[:emailbody])
	redirect_to :back
  end
end
